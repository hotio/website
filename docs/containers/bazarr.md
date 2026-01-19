---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19209" onclick="CopyToClipboard('tag19209');return false;" class="tag-decoration">nightly</div><div id="tag12825" onclick="CopyToClipboard('tag12825');return false;" class="tag-decoration">nightly-4763816</div><div id="tag13403" onclick="CopyToClipboard('tag13403');return false;" class="tag-decoration">nightly-1.5.5-beta.7</div><div id="tag11462" onclick="CopyToClipboard('tag11462');return false;" class="tag-decoration">nightly-v1</div><div id="tag1222" onclick="CopyToClipboard('tag1222');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag26418" onclick="CopyToClipboard('tag26418');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/4763816654718abe91138cd28cc0d5900441307e" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21124032826" target="_blank">2026-01-19 03:12:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4643" onclick="CopyToClipboard('tag4643');return false;" class="tag-decoration">release</div><div id="tag14177" onclick="CopyToClipboard('tag14177');return false;" class="tag-decoration">release-020b004</div><div id="tag28667" onclick="CopyToClipboard('tag28667');return false;" class="tag-decoration">release-1.5.4</div><div id="tag6082" onclick="CopyToClipboard('tag6082');return false;" class="tag-decoration">release-v1</div><div id="tag3734" onclick="CopyToClipboard('tag3734');return false;" class="tag-decoration">release-v1.5</div><div id="tag31109" onclick="CopyToClipboard('tag31109');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/020b0043c19e9558f82e4e929ebae6bf01092372" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21113692328" target="_blank">2026-01-18 14:56:45</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
