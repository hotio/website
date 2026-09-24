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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11471" onclick="CopyToClipboard('tag11471');return false;" class="tag-decoration">release</div><div id="tag16250" onclick="CopyToClipboard('tag16250');return false;" class="tag-decoration">release-35f274b</div><div id="tag18948" onclick="CopyToClipboard('tag18948');return false;" class="tag-decoration">release-2.18.1</div><div id="tag32157" onclick="CopyToClipboard('tag32157');return false;" class="tag-decoration">release-v2</div><div id="tag21886" onclick="CopyToClipboard('tag21886');return false;" class="tag-decoration">release-v2.18</div><div id="tag26900" onclick="CopyToClipboard('tag26900');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/35f274b8e81e5e97e6ab92d4c319b6f2a0718b95" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35960487868" target="_blank">2026-09-24 05:33:35</a></td></tr>
<tr><td><div id="tag16316" onclick="CopyToClipboard('tag16316');return false;" class="tag-decoration">testing</div><div id="tag22366" onclick="CopyToClipboard('tag22366');return false;" class="tag-decoration">testing-9a0ecfe</div><div id="tag24375" onclick="CopyToClipboard('tag24375');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag15598" onclick="CopyToClipboard('tag15598');return false;" class="tag-decoration">testing-v2</div><div id="tag30587" onclick="CopyToClipboard('tag30587');return false;" class="tag-decoration">testing-v2.18</div><div id="tag18168" onclick="CopyToClipboard('tag18168');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/9a0ecfe4047deca065dbb23a3764690fda4051c8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35696962729" target="_blank">2026-09-22 06:54:12</a></td></tr>
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
