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
<tr><td><div id="tag12970" onclick="CopyToClipboard('tag12970');return false;" class="tag-decoration">nightly</div><div id="tag4606" onclick="CopyToClipboard('tag4606');return false;" class="tag-decoration">nightly-3469507</div><div id="tag3596" onclick="CopyToClipboard('tag3596');return false;" class="tag-decoration">nightly-4800bbe16c0a5f57eb4651a6a77cebd40f5a02cc</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/34695075bfc0044edbd2d895c5fa40a918cbb201" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29313546144" target="_blank">2026-07-14 07:07:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13584" onclick="CopyToClipboard('tag13584');return false;" class="tag-decoration">release</div><div id="tag22708" onclick="CopyToClipboard('tag22708');return false;" class="tag-decoration">release-c4b2c06</div><div id="tag29178" onclick="CopyToClipboard('tag29178');return false;" class="tag-decoration">release-4.9.1</div><div id="tag20736" onclick="CopyToClipboard('tag20736');return false;" class="tag-decoration">release-v4</div><div id="tag24524" onclick="CopyToClipboard('tag24524');return false;" class="tag-decoration">release-v4.9</div><div id="tag18847" onclick="CopyToClipboard('tag18847');return false;" class="tag-decoration">release-v4.9.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/c4b2c06802964d49ef55a20a69f7332a09c0a732" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29306997396" target="_blank">2026-07-14 04:51:15</a></td></tr>
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
