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
<tr><td><div id="tag1944" onclick="CopyToClipboard('tag1944');return false;" class="tag-decoration">nightly</div><div id="tag23301" onclick="CopyToClipboard('tag23301');return false;" class="tag-decoration">nightly-2feb014</div><div id="tag26800" onclick="CopyToClipboard('tag26800');return false;" class="tag-decoration">nightly-3.1.2.4939</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/2feb01426e247754c6403792c74e86baddb7f900" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25708388143" target="_blank">2026-05-12 01:51:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4509" onclick="CopyToClipboard('tag4509');return false;" class="tag-decoration">release</div><div id="tag31142" onclick="CopyToClipboard('tag31142');return false;" class="tag-decoration">release-3f112c9</div><div id="tag31639" onclick="CopyToClipboard('tag31639');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/3f112c9d01bd39b22a874317e86af7c4eeff1823" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25707164628" target="_blank">2026-05-12 01:15:02</a></td></tr>
<tr><td><div id="tag24045" onclick="CopyToClipboard('tag24045');return false;" class="tag-decoration">testing</div><div id="tag23025" onclick="CopyToClipboard('tag23025');return false;" class="tag-decoration">testing-5616263</div><div id="tag3631" onclick="CopyToClipboard('tag3631');return false;" class="tag-decoration">testing-3.1.2.4938</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/561626370cf5954b36e97657724bd00e105e1135" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25708393060" target="_blank">2026-05-12 01:51:43</a></td></tr>
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
