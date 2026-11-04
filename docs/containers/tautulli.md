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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12323" onclick="CopyToClipboard('tag12323');return false;" class="tag-decoration">release</div><div id="tag347" onclick="CopyToClipboard('tag347');return false;" class="tag-decoration">release-7efc075</div><div id="tag10713" onclick="CopyToClipboard('tag10713');return false;" class="tag-decoration">release-2.18.2</div><div id="tag1440" onclick="CopyToClipboard('tag1440');return false;" class="tag-decoration">release-v2</div><div id="tag20433" onclick="CopyToClipboard('tag20433');return false;" class="tag-decoration">release-v2.18</div><div id="tag10925" onclick="CopyToClipboard('tag10925');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7efc075944ae5ff1ceaaeddd46c23ce3ee9afe89" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/41929519640" target="_blank">2026-11-04 22:55:57</a></td></tr>
<tr><td><div id="tag24489" onclick="CopyToClipboard('tag24489');return false;" class="tag-decoration">testing</div><div id="tag15251" onclick="CopyToClipboard('tag15251');return false;" class="tag-decoration">testing-3f46d2d</div><div id="tag29813" onclick="CopyToClipboard('tag29813');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag16569" onclick="CopyToClipboard('tag16569');return false;" class="tag-decoration">testing-v2</div><div id="tag23890" onclick="CopyToClipboard('tag23890');return false;" class="tag-decoration">testing-v2.18</div><div id="tag29971" onclick="CopyToClipboard('tag29971');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/3f46d2dec214c63f9bd04958f3a201753645c842" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/41559247308" target="_blank">2026-11-03 01:21:46</a></td></tr>
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
