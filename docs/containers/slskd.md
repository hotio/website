---
hide:
  - toc
title: hotio/slskd
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
<tr><td><div id="tag31105" onclick="CopyToClipboard('tag31105');return false;" class="tag-decoration">nightly</div><div id="tag6847" onclick="CopyToClipboard('tag6847');return false;" class="tag-decoration">nightly-e6abfa6</div><div id="tag23630" onclick="CopyToClipboard('tag23630');return false;" class="tag-decoration">nightly-0.26.0.65534-7c302a75</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/e6abfa62ddba67ee04fac9d9d02740c057866aee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/37406203121" target="_blank">2026-10-06 02:51:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19396" onclick="CopyToClipboard('tag19396');return false;" class="tag-decoration">release</div><div id="tag9171" onclick="CopyToClipboard('tag9171');return false;" class="tag-decoration">release-02acc0d</div><div id="tag12686" onclick="CopyToClipboard('tag12686');return false;" class="tag-decoration">release-0.26.0</div><div id="tag27354" onclick="CopyToClipboard('tag27354');return false;" class="tag-decoration">release-v0</div><div id="tag7930" onclick="CopyToClipboard('tag7930');return false;" class="tag-decoration">release-v0.26</div><div id="tag18238" onclick="CopyToClipboard('tag18238');return false;" class="tag-decoration">release-v0.26.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/02acc0d467e5afafdf5901d90c93f65971479594" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/37501216372" target="_blank">2026-10-06 17:08:24</a></td></tr>
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
