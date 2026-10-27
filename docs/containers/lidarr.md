---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag29516" onclick="CopyToClipboard('tag29516');return false;" class="tag-decoration">nightly</div><div id="tag4105" onclick="CopyToClipboard('tag4105');return false;" class="tag-decoration">nightly-9776507</div><div id="tag21344" onclick="CopyToClipboard('tag21344');return false;" class="tag-decoration">nightly-3.2.0.5144</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/97765077d01b2b41e756a1d27cb24fccd8c710d1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40584708164" target="_blank">2026-10-27 21:11:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12039" onclick="CopyToClipboard('tag12039');return false;" class="tag-decoration">release</div><div id="tag14136" onclick="CopyToClipboard('tag14136');return false;" class="tag-decoration">release-0da209f</div><div id="tag31926" onclick="CopyToClipboard('tag31926');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/0da209f0ff2a36a8b16a30117d38dce52cc6d270" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40540059804" target="_blank">2026-10-27 16:21:07</a></td></tr>
<tr><td><div id="tag338" onclick="CopyToClipboard('tag338');return false;" class="tag-decoration">testing</div><div id="tag26779" onclick="CopyToClipboard('tag26779');return false;" class="tag-decoration">testing-4223e6c</div><div id="tag16872" onclick="CopyToClipboard('tag16872');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/4223e6c622809a49d0d5c82db980b1c588a4fc5c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40540049690" target="_blank">2026-10-27 16:21:02</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
