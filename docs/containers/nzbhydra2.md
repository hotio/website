---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21817" onclick="CopyToClipboard('tag21817');return false;" class="tag-decoration">release</div><div id="tag9179" onclick="CopyToClipboard('tag9179');return false;" class="tag-decoration">release-8.2.1</div><div id="tag13631" onclick="CopyToClipboard('tag13631');return false;" class="tag-decoration">release-b4414d7</div><div id="tag16382" onclick="CopyToClipboard('tag16382');return false;" class="tag-decoration">release-v8</div><div id="tag8162" onclick="CopyToClipboard('tag8162');return false;" class="tag-decoration">release-v8.2</div><div id="tag7749" onclick="CopyToClipboard('tag7749');return false;" class="tag-decoration">release-v8.2.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b4414d714154776a02b833b2a7562199684098b0" target="_blank">Upstream update: noblevpn-d932ed0 => noblevpn-c55f8d5</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20892085953" target="_blank">2026-01-11 08:19:36</a></td></tr>
<tr><td><div id="tag1850" onclick="CopyToClipboard('tag1850');return false;" class="tag-decoration">testing</div><div id="tag12071" onclick="CopyToClipboard('tag12071');return false;" class="tag-decoration">testing-8.2.1</div><div id="tag25969" onclick="CopyToClipboard('tag25969');return false;" class="tag-decoration">testing-503c10b</div><div id="tag3624" onclick="CopyToClipboard('tag3624');return false;" class="tag-decoration">testing-v8</div><div id="tag24915" onclick="CopyToClipboard('tag24915');return false;" class="tag-decoration">testing-v8.2</div><div id="tag20664" onclick="CopyToClipboard('tag20664');return false;" class="tag-decoration">testing-v8.2.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/503c10ba7eddafa7c3851f1d738015c0d532a89a" target="_blank">Upstream update: noblevpn-5c07a3a => noblevpn-d932ed0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20850338039" target="_blank">2026-01-09 11:22:58</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
