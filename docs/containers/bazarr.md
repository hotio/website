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
<tr><td><div id="tag16399" onclick="CopyToClipboard('tag16399');return false;" class="tag-decoration">nightly</div><div id="tag15584" onclick="CopyToClipboard('tag15584');return false;" class="tag-decoration">nightly-e0c815d</div><div id="tag13605" onclick="CopyToClipboard('tag13605');return false;" class="tag-decoration">nightly-1.5.7-beta.31</div><div id="tag21192" onclick="CopyToClipboard('tag21192');return false;" class="tag-decoration">nightly-v1</div><div id="tag12910" onclick="CopyToClipboard('tag12910');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag24672" onclick="CopyToClipboard('tag24672');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/e0c815dc853e8f2067caa8d98c92c47626b096ad" target="_blank">Version update: 1.5.7-beta.30 => 1.5.7-beta.31</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25206186136" target="_blank">2026-05-01 07:13:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1847" onclick="CopyToClipboard('tag1847');return false;" class="tag-decoration">release</div><div id="tag30266" onclick="CopyToClipboard('tag30266');return false;" class="tag-decoration">release-817e2ae</div><div id="tag14102" onclick="CopyToClipboard('tag14102');return false;" class="tag-decoration">release-1.5.6</div><div id="tag23741" onclick="CopyToClipboard('tag23741');return false;" class="tag-decoration">release-v1</div><div id="tag9647" onclick="CopyToClipboard('tag9647');return false;" class="tag-decoration">release-v1.5</div><div id="tag24537" onclick="CopyToClipboard('tag24537');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/817e2ae83df1006d994667ba0cfbe942e3c30381" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/24552117589" target="_blank">2026-04-17 06:53:41</a></td></tr>
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
