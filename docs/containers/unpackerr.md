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
<tr><td><div id="tag15718" onclick="CopyToClipboard('tag15718');return false;" class="tag-decoration">nightly</div><div id="tag20768" onclick="CopyToClipboard('tag20768');return false;" class="tag-decoration">nightly-2f8e8de</div><div id="tag3374" onclick="CopyToClipboard('tag3374');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/2f8e8decf6cfef5c3d843b576db1c559a128efa6" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21200280745" target="_blank">2026-01-21 06:58:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14022" onclick="CopyToClipboard('tag14022');return false;" class="tag-decoration">release</div><div id="tag5020" onclick="CopyToClipboard('tag5020');return false;" class="tag-decoration">release-c6d5eef</div><div id="tag22210" onclick="CopyToClipboard('tag22210');return false;" class="tag-decoration">release-0.14.5</div><div id="tag9545" onclick="CopyToClipboard('tag9545');return false;" class="tag-decoration">release-v0</div><div id="tag23315" onclick="CopyToClipboard('tag23315');return false;" class="tag-decoration">release-v0.14</div><div id="tag28911" onclick="CopyToClipboard('tag28911');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/c6d5eefae357fb1b97d71215188d1d9459252e39" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21200281245" target="_blank">2026-01-21 06:58:28</a></td></tr>
<tr><td><div id="tag31803" onclick="CopyToClipboard('tag31803');return false;" class="tag-decoration">testing</div><div id="tag27843" onclick="CopyToClipboard('tag27843');return false;" class="tag-decoration">testing-7d675a0</div><div id="tag25238" onclick="CopyToClipboard('tag25238');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag1817" onclick="CopyToClipboard('tag1817');return false;" class="tag-decoration">testing-v0</div><div id="tag17582" onclick="CopyToClipboard('tag17582');return false;" class="tag-decoration">testing-v0.14</div><div id="tag2101" onclick="CopyToClipboard('tag2101');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7d675a0a84cea7be2f77f88139c986aaf185b1f9" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21200281872" target="_blank">2026-01-21 06:58:29</a></td></tr>
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
