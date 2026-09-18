---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5222" onclick="CopyToClipboard('tag5222');return false;" class="tag-decoration">v2</div><div id="tag8917" onclick="CopyToClipboard('tag8917');return false;" class="tag-decoration">v2-708fe0c</div><div id="tag7577" onclick="CopyToClipboard('tag7577');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag26339" onclick="CopyToClipboard('tag26339');return false;" class="tag-decoration">v2-v2</div><div id="tag12031" onclick="CopyToClipboard('tag12031');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32087" onclick="CopyToClipboard('tag32087');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/708fe0ccacf65faa0432f75d254d222b105e9a8c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297339382" target="_blank">2026-09-18 01:56:24</a></td></tr>
<tr><td><div id="tag23581" onclick="CopyToClipboard('tag23581');return false;" class="tag-decoration">v2-develop</div><div id="tag14948" onclick="CopyToClipboard('tag14948');return false;" class="tag-decoration">v2-develop-b6a35df</div><div id="tag24585" onclick="CopyToClipboard('tag24585');return false;" class="tag-decoration">v2-develop-2.2.0-develop.353</div><div id="tag7040" onclick="CopyToClipboard('tag7040');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag30954" onclick="CopyToClipboard('tag30954');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag11384" onclick="CopyToClipboard('tag11384');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b6a35df814c9db54c082f97aca0b7354c9442352" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297383146" target="_blank">2026-09-18 01:57:03</a></td></tr>
<tr><td><div id="tag1736" onclick="CopyToClipboard('tag1736');return false;" class="tag-decoration">v3</div><div id="tag14652" onclick="CopyToClipboard('tag14652');return false;" class="tag-decoration">v3-7473cc8</div><div id="tag32663" onclick="CopyToClipboard('tag32663');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag26098" onclick="CopyToClipboard('tag26098');return false;" class="tag-decoration">v3-v3</div><div id="tag2835" onclick="CopyToClipboard('tag2835');return false;" class="tag-decoration">v3-v3.6</div><div id="tag1552" onclick="CopyToClipboard('tag1552');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7473cc8e3c972f571ea0ad6fc177334f9017f959" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297332996" target="_blank">2026-09-18 01:56:18</a></td></tr>
<tr><td><div id="tag370" onclick="CopyToClipboard('tag370');return false;" class="tag-decoration">v3-develop</div><div id="tag15062" onclick="CopyToClipboard('tag15062');return false;" class="tag-decoration">v3-develop-bb62399</div><div id="tag24647" onclick="CopyToClipboard('tag24647');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1661</div><div id="tag17685" onclick="CopyToClipboard('tag17685');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31175" onclick="CopyToClipboard('tag31175');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag17431" onclick="CopyToClipboard('tag17431');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/bb62399fbee96d923e3be1b2a72c8ac46d52f7e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297350918" target="_blank">2026-09-18 01:56:34</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
