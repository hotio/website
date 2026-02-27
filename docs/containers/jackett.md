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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3229" onclick="CopyToClipboard('tag3229');return false;" class="tag-decoration">release</div><div id="tag31215" onclick="CopyToClipboard('tag31215');return false;" class="tag-decoration">release-8fc281e</div><div id="tag25314" onclick="CopyToClipboard('tag25314');return false;" class="tag-decoration">release-0.24.1223</div><div id="tag22341" onclick="CopyToClipboard('tag22341');return false;" class="tag-decoration">release-v0</div><div id="tag5195" onclick="CopyToClipboard('tag5195');return false;" class="tag-decoration">release-v0.24</div><div id="tag5240" onclick="CopyToClipboard('tag5240');return false;" class="tag-decoration">release-v0.24.1223</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8fc281e427eb5ea4e53413b138a0dd2530af850b" target="_blank">Version update: 0.24.1218 => 0.24.1223</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22475681118" target="_blank">2026-02-27 06:34:23</a></td></tr>
<tr><td><div id="tag12019" onclick="CopyToClipboard('tag12019');return false;" class="tag-decoration">testing</div><div id="tag7264" onclick="CopyToClipboard('tag7264');return false;" class="tag-decoration">testing-ef6a365</div><div id="tag19720" onclick="CopyToClipboard('tag19720');return false;" class="tag-decoration">testing-0.24.1223</div><div id="tag9746" onclick="CopyToClipboard('tag9746');return false;" class="tag-decoration">testing-v0</div><div id="tag5700" onclick="CopyToClipboard('tag5700');return false;" class="tag-decoration">testing-v0.24</div><div id="tag21992" onclick="CopyToClipboard('tag21992');return false;" class="tag-decoration">testing-v0.24.1223</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/ef6a365b04ccb3236ce48f705d6f8d09be56c2e2" target="_blank">Version update: 0.24.1218 => 0.24.1223</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22475681967" target="_blank">2026-02-27 06:34:26</a></td></tr>
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
