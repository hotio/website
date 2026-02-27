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
<tr><td><div id="tag21745" onclick="CopyToClipboard('tag21745');return false;" class="tag-decoration">nightly</div><div id="tag854" onclick="CopyToClipboard('tag854');return false;" class="tag-decoration">nightly-b9fe9c2</div><div id="tag20552" onclick="CopyToClipboard('tag20552');return false;" class="tag-decoration">nightly-40e7284fbd9b50fb8fc7ec01d5a586eef7c1e704</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/b9fe9c2ffff3d4748dccc9f1ff8a944e7f1b3104" target="_blank">Version update: d31a66ce1c8cd299fd7525a7ee2c1f82a59fef8d => 40e7284fbd9b50fb8fc7ec01d5a586eef7c1e704</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/22488306285" target="_blank">2026-02-27 13:33:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30611" onclick="CopyToClipboard('tag30611');return false;" class="tag-decoration">release</div><div id="tag29892" onclick="CopyToClipboard('tag29892');return false;" class="tag-decoration">release-1ef2270</div><div id="tag17670" onclick="CopyToClipboard('tag17670');return false;" class="tag-decoration">release-4.6.5</div><div id="tag28874" onclick="CopyToClipboard('tag28874');return false;" class="tag-decoration">release-v4</div><div id="tag30344" onclick="CopyToClipboard('tag30344');return false;" class="tag-decoration">release-v4.6</div><div id="tag21310" onclick="CopyToClipboard('tag21310');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/1ef22700ea2ab6bc28f35f7891c40a23f0901949" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/22292131140" target="_blank">2026-02-23 03:43:59</a></td></tr>
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
