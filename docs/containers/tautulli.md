---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14433" onclick="CopyToClipboard('tag14433');return false;" class="tag-decoration">release</div><div id="tag8362" onclick="CopyToClipboard('tag8362');return false;" class="tag-decoration">release-19cbf59</div><div id="tag18925" onclick="CopyToClipboard('tag18925');return false;" class="tag-decoration">release-2.18.1</div><div id="tag13023" onclick="CopyToClipboard('tag13023');return false;" class="tag-decoration">release-v2</div><div id="tag11742" onclick="CopyToClipboard('tag11742');return false;" class="tag-decoration">release-v2.18</div><div id="tag24345" onclick="CopyToClipboard('tag24345');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/19cbf5934b4b8e396bd54c59e4de108f2732a1b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33599088421" target="_blank">2026-09-02 06:29:44</a></td></tr>
<tr><td><div id="tag3132" onclick="CopyToClipboard('tag3132');return false;" class="tag-decoration">testing</div><div id="tag17512" onclick="CopyToClipboard('tag17512');return false;" class="tag-decoration">testing-20ee7da</div><div id="tag21975" onclick="CopyToClipboard('tag21975');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag21440" onclick="CopyToClipboard('tag21440');return false;" class="tag-decoration">testing-v2</div><div id="tag32556" onclick="CopyToClipboard('tag32556');return false;" class="tag-decoration">testing-v2.18</div><div id="tag23289" onclick="CopyToClipboard('tag23289');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/20ee7daa686e53936ed08ae9be18714788f968ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33599083810" target="_blank">2026-09-02 06:29:40</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
