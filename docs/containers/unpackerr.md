---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8911" onclick="CopyToClipboard('tag8911');return false;" class="tag-decoration">nightly</div><div id="tag28619" onclick="CopyToClipboard('tag28619');return false;" class="tag-decoration">nightly-b803c09</div><div id="tag3457" onclick="CopyToClipboard('tag3457');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/b803c09b86998fd269eb4526bdc66c853b233c77" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21090400983" target="_blank">2026-01-17 07:01:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16401" onclick="CopyToClipboard('tag16401');return false;" class="tag-decoration">release</div><div id="tag15488" onclick="CopyToClipboard('tag15488');return false;" class="tag-decoration">release-8a883c7</div><div id="tag29256" onclick="CopyToClipboard('tag29256');return false;" class="tag-decoration">release-0.14.5</div><div id="tag20375" onclick="CopyToClipboard('tag20375');return false;" class="tag-decoration">release-v0</div><div id="tag15461" onclick="CopyToClipboard('tag15461');return false;" class="tag-decoration">release-v0.14</div><div id="tag22609" onclick="CopyToClipboard('tag22609');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/8a883c7dcc06567afa8d8b69ff6d1aa4d23f11a9" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21090401272" target="_blank">2026-01-17 07:02:00</a></td></tr>
<tr><td><div id="tag31859" onclick="CopyToClipboard('tag31859');return false;" class="tag-decoration">testing</div><div id="tag15385" onclick="CopyToClipboard('tag15385');return false;" class="tag-decoration">testing-50bac72</div><div id="tag5426" onclick="CopyToClipboard('tag5426');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag28464" onclick="CopyToClipboard('tag28464');return false;" class="tag-decoration">testing-v0</div><div id="tag17941" onclick="CopyToClipboard('tag17941');return false;" class="tag-decoration">testing-v0.14</div><div id="tag30986" onclick="CopyToClipboard('tag30986');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/50bac72ecc533b0d0423beb7221d88a61fa428a4" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21090401532" target="_blank">2026-01-17 07:02:01</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
