---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15065" onclick="CopyToClipboard('tag15065');return false;" class="tag-decoration">release</div><div id="tag17936" onclick="CopyToClipboard('tag17936');return false;" class="tag-decoration">release-0.24.1</div><div id="tag10312" onclick="CopyToClipboard('tag10312');return false;" class="tag-decoration">release-76a179b</div><div id="tag4249" onclick="CopyToClipboard('tag4249');return false;" class="tag-decoration">release-v0</div><div id="tag9935" onclick="CopyToClipboard('tag9935');return false;" class="tag-decoration">release-v0.24</div><div id="tag5211" onclick="CopyToClipboard('tag5211');return false;" class="tag-decoration">release-v0.24.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/76a179bad56dce5387608a17e87d248e88cfd68c" target="_blank">release slskd</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/20888132401" target="_blank">2026-01-11 02:30:03</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/slskd
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
