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
<tr><td><div id="tag24613" onclick="CopyToClipboard('tag24613');return false;" class="tag-decoration">nightly</div><div id="tag5919" onclick="CopyToClipboard('tag5919');return false;" class="tag-decoration">nightly-68c4d26</div><div id="tag9591" onclick="CopyToClipboard('tag9591');return false;" class="tag-decoration">nightly-4.0.0.5236</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/68c4d26b1403b05a785d0b4603046e67942c9eff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45530954240" target="_blank">2026-11-25 02:09:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16761" onclick="CopyToClipboard('tag16761');return false;" class="tag-decoration">release</div><div id="tag32642" onclick="CopyToClipboard('tag32642');return false;" class="tag-decoration">release-c917208</div><div id="tag26597" onclick="CopyToClipboard('tag26597');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/c917208c8a8e09c3324cb121d7396b3a5430c93c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45530953705" target="_blank">2026-11-25 02:09:44</a></td></tr>
<tr><td><div id="tag8388" onclick="CopyToClipboard('tag8388');return false;" class="tag-decoration">testing</div><div id="tag15322" onclick="CopyToClipboard('tag15322');return false;" class="tag-decoration">testing-57565d1</div><div id="tag12244" onclick="CopyToClipboard('tag12244');return false;" class="tag-decoration">testing-3.2.1.5196</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/57565d114ed381700531c2b4101c4ee34a97dbb4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45757820134" target="_blank">2026-11-26 04:51:15</a></td></tr>
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
