---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag21385" onclick="CopyToClipboard('tag21385');return false;" class="tag-decoration">nightly</div><div id="tag18842" onclick="CopyToClipboard('tag18842');return false;" class="tag-decoration">nightly-3b6d90a</div><div id="tag7331" onclick="CopyToClipboard('tag7331');return false;" class="tag-decoration">nightly-a117b3f4ad67eff617c7dcdaaee554b8dc751af8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/3b6d90abd875b7b79c81937c23181705546eb0fa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/26585016499" target="_blank">2026-05-28 15:38:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18156" onclick="CopyToClipboard('tag18156');return false;" class="tag-decoration">release</div><div id="tag10655" onclick="CopyToClipboard('tag10655');return false;" class="tag-decoration">release-4874b25</div><div id="tag24486" onclick="CopyToClipboard('tag24486');return false;" class="tag-decoration">release-4.7.1</div><div id="tag10726" onclick="CopyToClipboard('tag10726');return false;" class="tag-decoration">release-v4</div><div id="tag15969" onclick="CopyToClipboard('tag15969');return false;" class="tag-decoration">release-v4.7</div><div id="tag11267" onclick="CopyToClipboard('tag11267');return false;" class="tag-decoration">release-v4.7.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/4874b2585abfaed2cec1e25fe676e50d5b2e8de9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/26042656704" target="_blank">2026-05-18 15:18:08</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
