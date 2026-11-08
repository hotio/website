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
<tr><td><div id="tag2704" onclick="CopyToClipboard('tag2704');return false;" class="tag-decoration">nightly</div><div id="tag21291" onclick="CopyToClipboard('tag21291');return false;" class="tag-decoration">nightly-a39c9ea</div><div id="tag9726" onclick="CopyToClipboard('tag9726');return false;" class="tag-decoration">nightly-3.2.1.5196</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/a39c9ea890f05b4bdd3858a2fbcd601c67209706" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42457391656" target="_blank">2026-11-08 07:06:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12203" onclick="CopyToClipboard('tag12203');return false;" class="tag-decoration">release</div><div id="tag24788" onclick="CopyToClipboard('tag24788');return false;" class="tag-decoration">release-e651617</div><div id="tag12879" onclick="CopyToClipboard('tag12879');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/e65161753c4cd5c79b12ebb37fa20f23f2656c59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42308434316" target="_blank">2026-11-06 22:56:51</a></td></tr>
<tr><td><div id="tag31820" onclick="CopyToClipboard('tag31820');return false;" class="tag-decoration">testing</div><div id="tag11854" onclick="CopyToClipboard('tag11854');return false;" class="tag-decoration">testing-7317842</div><div id="tag6807" onclick="CopyToClipboard('tag6807');return false;" class="tag-decoration">testing-3.2.1.5196</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/7317842591f8b9a5c5a5088ccfbe30fdea358e1a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42515238701" target="_blank">2026-11-08 19:28:45</a></td></tr>
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
