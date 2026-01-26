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
<tr><td><div id="tag13395" onclick="CopyToClipboard('tag13395');return false;" class="tag-decoration">nightly</div><div id="tag17636" onclick="CopyToClipboard('tag17636');return false;" class="tag-decoration">nightly-cfd47c3</div><div id="tag26951" onclick="CopyToClipboard('tag26951');return false;" class="tag-decoration">nightly-3.1.2.4914</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/cfd47c317b63fd3bf4dd4ebf7377c66e89504db1" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21354166585" target="_blank">2026-01-26 10:20:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3364" onclick="CopyToClipboard('tag3364');return false;" class="tag-decoration">release</div><div id="tag20367" onclick="CopyToClipboard('tag20367');return false;" class="tag-decoration">release-3087c71</div><div id="tag9356" onclick="CopyToClipboard('tag9356');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/3087c713f0508c358ea8b14addcb1da16b7921e8" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21354167388" target="_blank">2026-01-26 10:20:25</a></td></tr>
<tr><td><div id="tag24083" onclick="CopyToClipboard('tag24083');return false;" class="tag-decoration">testing</div><div id="tag31297" onclick="CopyToClipboard('tag31297');return false;" class="tag-decoration">testing-ba410ed</div><div id="tag1122" onclick="CopyToClipboard('tag1122');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/ba410ed0f2e238a04d1bbac6ff92a72787256a80" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21324839390" target="_blank">2026-01-25 01:32:47</a></td></tr>
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
