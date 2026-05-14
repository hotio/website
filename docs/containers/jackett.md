---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11505" onclick="CopyToClipboard('tag11505');return false;" class="tag-decoration">release</div><div id="tag21431" onclick="CopyToClipboard('tag21431');return false;" class="tag-decoration">release-71c857d</div><div id="tag18094" onclick="CopyToClipboard('tag18094');return false;" class="tag-decoration">release-0.24.1859</div><div id="tag12043" onclick="CopyToClipboard('tag12043');return false;" class="tag-decoration">release-v0</div><div id="tag29596" onclick="CopyToClipboard('tag29596');return false;" class="tag-decoration">release-v0.24</div><div id="tag16096" onclick="CopyToClipboard('tag16096');return false;" class="tag-decoration">release-v0.24.1859</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/71c857d1d211b67bf860e579fea0fcffebcefbae" target="_blank">Version update: 0.24.1849 => 0.24.1859</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25847925597" target="_blank">2026-05-14 07:32:31</a></td></tr>
<tr><td><div id="tag17586" onclick="CopyToClipboard('tag17586');return false;" class="tag-decoration">testing</div><div id="tag25925" onclick="CopyToClipboard('tag25925');return false;" class="tag-decoration">testing-29c194b</div><div id="tag1753" onclick="CopyToClipboard('tag1753');return false;" class="tag-decoration">testing-0.24.1859</div><div id="tag23818" onclick="CopyToClipboard('tag23818');return false;" class="tag-decoration">testing-v0</div><div id="tag3526" onclick="CopyToClipboard('tag3526');return false;" class="tag-decoration">testing-v0.24</div><div id="tag23237" onclick="CopyToClipboard('tag23237');return false;" class="tag-decoration">testing-v0.24.1859</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/29c194bc1030b1b93ad148bfc31e9c403a17895f" target="_blank">Version update: 0.24.1849 => 0.24.1859</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25847926555" target="_blank">2026-05-14 07:32:34</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
