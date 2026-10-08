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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10264" onclick="CopyToClipboard('tag10264');return false;" class="tag-decoration">release</div><div id="tag28475" onclick="CopyToClipboard('tag28475');return false;" class="tag-decoration">release-ad60002</div><div id="tag31408" onclick="CopyToClipboard('tag31408');return false;" class="tag-decoration">release-9.1.1</div><div id="tag6721" onclick="CopyToClipboard('tag6721');return false;" class="tag-decoration">release-v9</div><div id="tag16434" onclick="CopyToClipboard('tag16434');return false;" class="tag-decoration">release-v9.1</div><div id="tag25994" onclick="CopyToClipboard('tag25994');return false;" class="tag-decoration">release-v9.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ad6000275148e6b93a563cb53872d2f65cd64aa4" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/37718262911" target="_blank">2026-10-08 02:31:05</a></td></tr>
<tr><td><div id="tag16269" onclick="CopyToClipboard('tag16269');return false;" class="tag-decoration">testing</div><div id="tag21419" onclick="CopyToClipboard('tag21419');return false;" class="tag-decoration">testing-c73058f</div><div id="tag5035" onclick="CopyToClipboard('tag5035');return false;" class="tag-decoration">testing-9.1.1</div><div id="tag14381" onclick="CopyToClipboard('tag14381');return false;" class="tag-decoration">testing-v9</div><div id="tag29954" onclick="CopyToClipboard('tag29954');return false;" class="tag-decoration">testing-v9.1</div><div id="tag30569" onclick="CopyToClipboard('tag30569');return false;" class="tag-decoration">testing-v9.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/c73058f3cd91133406b7bcca3af3ae7a39544e8a" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/37507347331" target="_blank">2026-10-06 17:55:46</a></td></tr>
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
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
