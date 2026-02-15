---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag18313" onclick="CopyToClipboard('tag18313');return false;" class="tag-decoration">nightly</div><div id="tag25154" onclick="CopyToClipboard('tag25154');return false;" class="tag-decoration">nightly-1683f17</div><div id="tag23765" onclick="CopyToClipboard('tag23765');return false;" class="tag-decoration">nightly-0.24.3.65534-86d1ebbe</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/1683f179b9ac776b1bc25f858f4429d9e1028eb6" target="_blank">Version update: 0.24.3.65534+c11f9e2f => 0.24.3.65534+86d1ebbe</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/22044722152" target="_blank">2026-02-15 23:01:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15516" onclick="CopyToClipboard('tag15516');return false;" class="tag-decoration">release</div><div id="tag18238" onclick="CopyToClipboard('tag18238');return false;" class="tag-decoration">release-ee434f5</div><div id="tag27183" onclick="CopyToClipboard('tag27183');return false;" class="tag-decoration">release-0.24.3</div><div id="tag19604" onclick="CopyToClipboard('tag19604');return false;" class="tag-decoration">release-v0</div><div id="tag24617" onclick="CopyToClipboard('tag24617');return false;" class="tag-decoration">release-v0.24</div><div id="tag1524" onclick="CopyToClipboard('tag1524');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/ee434f54f15809e7538dfac685ec58cd87c035f2" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21428869993" target="_blank">2026-01-28 07:15:28</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
