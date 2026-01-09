---
hide:
  - toc
title: hotio/qui
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qui){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qui){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/autobrr/qui){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27878" onclick="CopyToClipboard('tag27878');return false;" class="tag-decoration">release</div><div id="tag14034" onclick="CopyToClipboard('tag14034');return false;" class="tag-decoration">release-1.12.0</div><div id="tag12365" onclick="CopyToClipboard('tag12365');return false;" class="tag-decoration">release-0327e59</div><div id="tag25168" onclick="CopyToClipboard('tag25168');return false;" class="tag-decoration">release-v1</div><div id="tag25106" onclick="CopyToClipboard('tag25106');return false;" class="tag-decoration">release-v1.12</div><div id="tag30948" onclick="CopyToClipboard('tag30948');return false;" class="tag-decoration">release-v1.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qui/commit/0327e590b0a3d02890e10fb7da90c6cdb782601d" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/qui/actions/runs/20845765052" target="_blank">2026-01-09 08:22:29</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qui" \
        -p 7476:7476 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/qui
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      qui:
        container_name: qui
        image: ghcr.io/hotio/qui
        ports:
          - "7476:7476"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
