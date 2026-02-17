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
<tr><td><div id="tag30472" onclick="CopyToClipboard('tag30472');return false;" class="tag-decoration">nightly</div><div id="tag30675" onclick="CopyToClipboard('tag30675');return false;" class="tag-decoration">nightly-f4cc823</div><div id="tag29002" onclick="CopyToClipboard('tag29002');return false;" class="tag-decoration">nightly-1aa1cf1357b8e345e35d109fe9a37f3070cdd6c3</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/f4cc823409e019830ba7763c1165752eff1785d3" target="_blank">Version update: 1346b6df964e8f8b4711be9ceae41140c5327be2 => 1aa1cf1357b8e345e35d109fe9a37f3070cdd6c3</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22089142447" target="_blank">2026-02-17 07:05:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4429" onclick="CopyToClipboard('tag4429');return false;" class="tag-decoration">release</div><div id="tag9742" onclick="CopyToClipboard('tag9742');return false;" class="tag-decoration">release-be8dbeb</div><div id="tag21906" onclick="CopyToClipboard('tag21906');return false;" class="tag-decoration">release-0.14.5</div><div id="tag14954" onclick="CopyToClipboard('tag14954');return false;" class="tag-decoration">release-v0</div><div id="tag13841" onclick="CopyToClipboard('tag13841');return false;" class="tag-decoration">release-v0.14</div><div id="tag2674" onclick="CopyToClipboard('tag2674');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/be8dbeb260746ea2bede1e064d21c5acddf2534d" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21428875994" target="_blank">2026-01-28 07:15:42</a></td></tr>
<tr><td><div id="tag25382" onclick="CopyToClipboard('tag25382');return false;" class="tag-decoration">testing</div><div id="tag28237" onclick="CopyToClipboard('tag28237');return false;" class="tag-decoration">testing-d447c68</div><div id="tag16634" onclick="CopyToClipboard('tag16634');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag1345" onclick="CopyToClipboard('tag1345');return false;" class="tag-decoration">testing-v0</div><div id="tag10312" onclick="CopyToClipboard('tag10312');return false;" class="tag-decoration">testing-v0.14</div><div id="tag18773" onclick="CopyToClipboard('tag18773');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d447c68baebe6430b3dc12e57dfce9b9d3a1b061" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21428876515" target="_blank">2026-01-28 07:15:44</a></td></tr>
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
